# Generated by Django 5.1.1 on 2024-10-31 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kbhs', '0005_assignment_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Admissions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('admission_number', models.CharField(max_length=100, unique=True)),
                ('date_of_admission', models.DateField(auto_now_add=True)),
                ('form', models.CharField(max_length=100)),
            ],
        ),
    ]
