from django.urls import path
from api.views import mixins

urlpatterns = [
    path('products/', mixins.ProductListAPIView.as_view(), name='level4_products_list'),
    path('products/<int:product_id>/', mixins.ProductDetailAPIView.as_view(), name='level4_product_detail'),

    path('categories/', mixins.CategoryListAPIView.as_view(), name='level4_categories_list'),
    path('categories/<int:category_id>/', mixins.CategoryDetailAPIView.as_view(), name='level4_category_detail'),
    path('categories/<int:category_id>/products/', mixins.CategoryProductsAPIView.as_view(), name='level4_category_products'),
]