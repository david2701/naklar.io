# Generated by Django 3.0.5 on 2020-04-23 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roulette', '0012_auto_20200416_1430_squashed_0016_auto_20200416_1504'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='created',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Erstellt'),
        ),
    ]
