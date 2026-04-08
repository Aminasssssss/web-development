from django.urls import path
from api.views import generics

urlpatterns = [
    path('products/', generics.ProductListAPIView.as_view(), name='level5_products_list'),
    path('products/<int:product_id>/', generics.ProductDetailAPIView.as_view(), name='level5_product_detail'),
    
    path('categories/', generics.CategoryListAPIView.as_view(), name='level5_categories_list'),
    path('categories/<int:category_id>/', generics.CategoryDetailAPIView.as_view(), name='level5_category_detail'),
    path('categories/<int:category_id>/products/', generics.CategoryProductsAPIView.as_view(), name='level5_category_products'),
]