# Generated by Django 2.2.6 on 2019-10-11 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('passbook_sources_ldap', '0004_auto_20191011_0839'),
    ]

    operations = [
        migrations.AddField(
            model_name='ldapsource',
            name='object_uniqueness_field',
            field=models.TextField(default='objectSid', help_text='Field which contains a unique Identifier.'),
        ),
        migrations.AddField(
            model_name='ldapsource',
            name='user_group_membership_field',
            field=models.TextField(default='memberOf', help_text='Field which contains Groups of user.'),
        ),
        migrations.AlterField(
            model_name='ldapsource',
            name='group_object_filter',
            field=models.TextField(default='(objectCategory=Group)', help_text='Consider Objects matching this filter to be Groups.'),
        ),
        migrations.AlterField(
            model_name='ldapsource',
            name='user_object_filter',
            field=models.TextField(default='(objectCategory=Person)', help_text='Consider Objects matching this filter to be Users.'),
        ),
    ]
