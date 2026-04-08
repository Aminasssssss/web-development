from django.urls import path, include

urlpatterns = [
    path('level2/', include('api.urls_level2')),
    path('level3/', include('api.urls_level3')),
    path('level4/', include('api.urls_level4')),
    path('level5/', include('api.urls_level5')),
    path('viewsets/', include('api.urls_level_viewsets')),
]