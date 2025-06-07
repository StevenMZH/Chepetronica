from django.db import models
import uuid
from datetime import timedelta

class UserAccount(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField('User', on_delete=models.CASCADE, related_name='account')

    # Metadata fields
    last_check_in = models.DateTimeField(null=True, blank=True)



    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['last_update']
        indexes = [
            models.Index(fields=['user']),
        ]
        
    def __str__(self):
        return f"Metadata of {self.user.username}"

class IO(models.Model):
    IO_status = [('read', 'read'), ('write', 'write'), ('non', 'non')]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField('User', on_delete=models.CASCADE, related_name='account')
    type = models.CharField(max_length=20, choices=IO_status, default='non')
    data = models.CharField("")
    
    class Meta:
        ordering = ['last_update']
        indexes = [
            models.Index(fields=['user']),
        ]
        
    def __str__(self):
        return f"Metadata of {self.user}"


# Account Data Template
# class AccountContent(models.Model):
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     account = models.ForeignKey('Account', on_delete=models.CASCADE, related_name='account_data')

#     # Relations with other Models    
#     model = models.ManyToOneRel('model', on_delete=models.CASCADE, related_name='relation_name')
#     # ...

#     # Relations Counter
#     model_counter = models.IntegerField(default=0)
#     # ...
    
#     class Meta:
#         indexes = [
#             models.Index(fields=['account']),
#             models.Index(fields=['model_counter']),
#         ]

#     def __str__(self):
#         return f"{self.account.user.username} Data)"


