# Generated by Django 3.0.6 on 2020-05-23 09:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('roulette', '0015_auto_20200519_1132'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentrequest',
            name='meeting',
            field=models.OneToOneField(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='roulette.Meeting'),
        ),
        migrations.AddField(
            model_name='tutorrequest',
            name='meeting',
            field=models.OneToOneField(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='roulette.Meeting'),
        ),
    ]
