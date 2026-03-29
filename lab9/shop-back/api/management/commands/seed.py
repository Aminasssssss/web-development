from django.core.management.base import BaseCommand
from api.models import Category, Product

class Command(BaseCommand):
    help = 'Seed database with initial data'

    def handle(self, *args, **kwargs):
        Product.objects.all().delete()
        Category.objects.all().delete()

        electronics = Category.objects.create(name='Electronics')
        clothing = Category.objects.create(name='Clothing')
        food = Category.objects.create(name='Food')
        books = Category.objects.create(name='Books')

        products = [
            Product(name='Laptop', price=999.99, description='Good laptop', count=10, is_active=True, category=electronics),
            Product(name='Phone', price=699.99, description='Smartphone', count=15, is_active=True, category=electronics),
            Product(name='Headphones', price=199.99, description='Wireless', count=20, is_active=True, category=electronics),
            Product(name='Tablet', price=499.99, description='iPad', count=8, is_active=True, category=electronics),
            Product(name='Smartwatch', price=299.99, description='Apple Watch', count=12, is_active=True, category=electronics),
            Product(name='T-Shirt', price=29.99, description='Cotton', count=50, is_active=True, category=clothing),
            Product(name='Jeans', price=59.99, description='Blue jeans', count=30, is_active=True, category=clothing),
            Product(name='Jacket', price=89.99, description='Winter jacket', count=25, is_active=True, category=clothing),
            Product(name='Sneakers', price=79.99, description='Nike', count=40, is_active=True, category=clothing),
            Product(name='Hat', price=19.99, description='Baseball cap', count=60, is_active=True, category=clothing),
            Product(name='Apple', price=1.99, description='Fresh apple', count=100, is_active=True, category=food),
            Product(name='Bread', price=2.99, description='White bread', count=80, is_active=True, category=food),
            Product(name='Milk', price=1.49, description='1L milk', count=90, is_active=True, category=food),
            Product(name='Cheese', price=5.99, description='Cheddar', count=45, is_active=True, category=food),
            Product(name='Chocolate', price=3.99, description='Dark chocolate', count=70, is_active=True, category=food),
            Product(name='Python Book', price=39.99, description='Learn Python', count=20, is_active=True, category=books),
            Product(name='Django Book', price=44.99, description='Learn Django', count=15, is_active=True, category=books),
            Product(name='JS Book', price=34.99, description='Learn JS', count=18, is_active=True, category=books),
            Product(name='CSS Book', price=29.99, description='Learn CSS', count=22, is_active=True, category=books),
            Product(name='HTML Book', price=24.99, description='Learn HTML', count=25, is_active=True, category=books),
        ]

        Product.objects.bulk_create(products)
        self.stdout.write(self.style.SUCCESS('Successfully seeded database!'))