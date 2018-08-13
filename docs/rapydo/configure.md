
# project configuration

To verify the current configuration project just edit the file:
```
projects/proof/project_configuration.yaml
```

You should only override SMTP variables to add a valid `gmail` account 
in ordert to have the registration email sent from the Flask server.
Remember to check Flask logs when registering a new profile to see if that works correctly.

NOTE: If you're server is failing here please read this issue:
https://github.com/pdonorio/proof-frontend-assignment/issues/1

NOTE: If you feel like SMTP configuration is wasting your time, please don't; it was meant to be fun :)
In that case just forget about the registration and at least provide login + profile page!

NOTE: to avoid commiting that file with sensitive information from that moment on, you may stop tracking it on git with:
```
git update-index --assume-unchanged projects/proof/project_configuration.yaml
```

