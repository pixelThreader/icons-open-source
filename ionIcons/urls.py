from django.urls import path
from . import views

urlpatterns = [
    path('icons', views.IIicons, name="ii-icon"),
    path('IIiconsPagination/', views.IIiconsPagination, name="ii-icon"),
    path('search/', views.IIiconsSearch, name="ii-search"),
    path('import-icons/', views.import_icons, name='import_icons'),



    
    # triggerer to save huge data in database eaisly as per my view
    # path('import-icons/', views.import_icons, name='import_icons'),
    # bootstrap-icons/import-icons/
]
