# Generated by Django 3.0.4 on 2020-03-27 13:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='interestedindividual',
            old_name='recv_updates',
            new_name='updates',
        ),
    ]
