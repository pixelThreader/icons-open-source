from django.urls import path
from . import views

urlpatterns = [
    path('icons', views.BSicons, name="bs-icon"),
    path('BSiconsPagination/', views.BSiconsPagination, name="bs-icon"),
    path('search/', views.BSiconsSearch, name="bs-search"),



    
    # triggerer to save huge data in database eaisly as per my view
    # path('import-icons/', views.import_icons, name='import_icons'),
    # bootstrap-icons/import-icons/
]
