from django.db import models

# Create your models here.


class Bootstrap_icons(models.Model):

    sno = models.AutoField(primary_key=True)
    sno2 = models.PositiveIntegerField(unique=True, null=True)
    name = models.CharField( max_length=255)
    path = models.CharField(max_length=500)
    format_download = models.CharField(max_length=10, default="svg")
    category = models.CharField(max_length=60)
    svgname = models.CharField(max_length=200)
    searchtag = models.CharField(max_length=700, db_index=True)

    class Meta:
        verbose_name = ("Bootstrap Icons")
        verbose_name_plural = ("Bootstrap Icons")

    def __str__(self):
        return self.name

# Optimisations

"""
If you have a separate search field and you only search based on the `searchtag` field, you can follow these steps to improve indexing specifically for that field:

1. Add an index to the `searchtag` field: Since you perform searches based on the `searchtag` field, adding an index to it can help improve search performance. You can use the `db_index=True` option to create an index for the field. Modify the `searchtag` field definition as follows:

```python
searchtag = models.CharField(max_length=700, db_index=True)
```

2. Generate and apply migrations: After making the changes to the model, generate and apply migrations to update the database schema. Run the following commands:

```
python manage.py makemigrations
python manage.py migrate
```

By adding an index to the `searchtag` field, the database will create an index specifically for that field, allowing for faster search queries.

A BIT BRIEF

No, you don't need to import anything specifically to use the `db_index=True` option. It is a built-in option provided by Django's `CharField` and other field types. By setting `db_index=True`, Django will automatically create an index on the specified field in the database.

The `db_index=True` option is part of the Django field options and can be used directly when defining the field in your model, as shown in the example provided earlier:

```python
searchtag = models.CharField(max_length=700, db_index=True)
```

Make sure you have Django installed and imported the required modules (`models` in this case) at the top of your Python file before defining the model.
"""