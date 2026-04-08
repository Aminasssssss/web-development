from django.urls import path
from api.views import fbv

urlpatterns = [
    path('products/', fbv.products_list, name='level2_products_list'),
    path('products/<int:product_id>/', fbv.product_detail, name='level2_product_detail'),
    path('categories/', fbv.categories_list, name='level2_categories_list'),
    path('categories/<int:category_id>/', fbv.category_detail, name='level2_category_detail'),
    path('categories/<int:category_id>/products/', fbv.category_products, name='level2_category_products'),
]