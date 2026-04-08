from django.urls import path
from api.views import cbv

urlpatterns = [
    path('products/', cbv.ProductListAPIView.as_view(), name='level3_products_list'),
    path('products/<int:product_id>/', cbv.ProductDetailAPIView.as_view(), name='level3_product_detail'),
    path('categories/', cbv.CategoryListAPIView.as_view(), name='level3_categories_list'),
    path('categories/<int:category_id>/', cbv.CategoryDetailAPIView.as_view(), name='level3_category_detail'),
    path('categories/<int:category_id>/products/', cbv.CategoryProductsAPIView.as_view(), name='level3_category_products'),
]