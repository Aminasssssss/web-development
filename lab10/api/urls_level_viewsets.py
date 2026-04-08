from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import views_wl1  

router = DefaultRouter()
router.register('categories', views_wl1.CategoryViewSet)
router.register('products', views_wl1.ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
]