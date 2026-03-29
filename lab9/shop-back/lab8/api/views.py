from django.shortcuts import render
from django.views.decorators.http import require_GET
from django.http import JsonResponse
from .models import Product, Category

def product_to_dict(product):
    return{
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category": {
            "id": product.category.id,
            "name": product.category.name,
        }
    }

def category_to_dict(category):
    return{
        "id": category.id,
        "name": category.name,
    }

@require_GET
def product_list(request):
    products = Product.objects.all()
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)

@require_GET
def product_detail(request, id):
    try: 
        product = Product.objects.get(id=id, is_active=True)
        return JsonResponse(product_to_dict(product))
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)

@require_GET
def category_list(request):
    categories = Category.objects.all()
    data = [category_to_dict(c) for c in categories]
    return JsonResponse(data, safe=False)

@require_GET
def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category_to_dict(category))
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)

@require_GET
def category_products(request, category_id):  # Fixed parameter name
    try:
        # Fixed: using category_id instead of id
        category = Category.objects.get(id=category_id)
        products = category.products.filter(is_active=True)
        data = [product_to_dict(p) for p in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)