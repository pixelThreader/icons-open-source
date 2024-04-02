from django.shortcuts import render
from .models import Bootstrap_icons
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.views.decorators.cache import cache_page
# For Fetching the time of searching
import time


# Create your views here.

def BSicons(request):
    icons = Bootstrap_icons.objects.all()
    paginator = Paginator(icons, 100)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context = {"icon": icons, "page_obj": page_obj}
    return render(request, "bootstrap/bootstrapicons.html", context)


def BSiconsPagination(request):
    icons = Bootstrap_icons.objects.all()
    paginator = Paginator(icons, 100)  # Display 100 icons per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    if request.META.get("HTTP_X_REQUESTED_WITH") == "XMLHttpRequest":
        data = []
        for icon in page_obj:
            data.append({
                "name": icon.name,
                "path": icon.path,
                "category": icon.category,
                "svgname": icon.svgname
            })
        return JsonResponse({"data": data})

@cache_page(60 * 2)
def BSiconsSearch(request):
    query = request.GET.get('search')
    search_terms = query.split() if query else []
    allSearchTag = Bootstrap_icons.objects.all()

    if query is not None and len(query) != 0:
        if search_terms:
            searchedItems = allSearchTag.filter(searchtag__icontains=search_terms[0])  # Using the first search term initially
            for term in search_terms[1:]:  # Remaining search terms
                searchedItems = searchedItems.filter(searchtag__icontains=term)

        # Measure the execution time of the query
        start_time = time.time()
        results = list(searchedItems)  # Execute the query and fetch results
        end_time = time.time()
        query_time = end_time - start_time
        if query_time == 0:
            query_time = "0.0001"
        else:
            pass
        if request.META.get("HTTP_X_REQUESTED_WITH") == "XMLHttpRequest":
            data = []
            for icon in results:
                data.append({
                    "name": icon.name,
                    "path": icon.path,
                    "category": icon.category,
                    "svgname": icon.svgname,
                    "found_searches": len(searchedItems),
                    "found_searches_time": round(query_time, 4),
                })
            return JsonResponse({"data": data})
        return JsonResponse({"data": None})
    else:
        return JsonResponse({"data": "null"})


# More Modifications

'''
The `cache_page` decorator in Django is used to cache the output of a view function or class-based view for a specified amount of time. Caching the view's output allows subsequent requests for the same URL to be served directly from the cache without re-executing the view function or hitting the database, resulting in improved performance.

To use the `cache_page` decorator, you need to import it from `django.views.decorators.cache` and apply it to your view function or class-based view.

Here's an example of how to use the `cache_page` decorator:

```python
from django.views.decorators.cache import cache_page
from django.http import HttpResponse

@cache_page(60 * 15)  # Cache the view output for 15 minutes
def my_view(request):
    # View logic here
    return HttpResponse("Hello, World!")
```

In this example, the `my_view` function is decorated with `cache_page(60 * 15)`, which specifies that the view's output should be cached for 15 minutes. The cache duration is defined in seconds.

When a request is made to this view, the first request will execute the view function and cache its output for subsequent requests. Within the cache duration (15 minutes in this example), subsequent requests for the same URL will be served directly from the cache without executing the view function, resulting in improved response time.

It's important to note that the `cache_page` decorator uses Django's caching framework, so you need to have the cache backend properly configured in your Django settings (`CACHE_BACKEND` setting).

By using the `cache_page` decorator, you can selectively cache specific views to improve performance for frequently accessed pages and reduce the load on your server and database.


Q. What is @cache_page(60 * 15)?

The `@cache_page(60 * 15)` is a decorator in Python that is used to apply caching to a view function or class-based view in Django. 

In the context of the example I provided, `@cache_page(60 * 15)` is used to cache the output of the `my_view` function for a duration of 15 minutes.

Let's break down what `@cache_page(60 * 15)` means:

- `cache_page` is the decorator function provided by Django's `django.views.decorators.cache` module.
- `60 * 15` calculates the number of seconds in 15 minutes. In this case, it's 900 seconds.

So, `@cache_page(60 * 15)` is essentially specifying that the output of the decorated view function should be cached for a duration of 15 minutes (900 seconds).

When a request is made to the view, the caching mechanism checks if the cached version of the response exists. If it does, and it is still within the cache duration, the cached response is served instead of executing the view function again. This improves the response time by avoiding the need to regenerate the response for every request within the cache duration.

By applying the `@cache_page` decorator with an appropriate cache duration to views that have relatively static content or content that doesn't need to be updated frequently, you can significantly reduce the load on your server and improve the performance of your Django application.
'''
