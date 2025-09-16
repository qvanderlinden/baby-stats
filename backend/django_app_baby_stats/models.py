from django.core.validators import MinValueValidator
from django.db import models


class DefaultModel(models.Model):
    # id field is automatically added by Django
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True  # tells Django not to create a separate table for this


class Bottle(DefaultModel):
    datetime = models.DateTimeField()
    quantity = models.IntegerField(validators=[MinValueValidator(0)])
    burp = models.BooleanField()
