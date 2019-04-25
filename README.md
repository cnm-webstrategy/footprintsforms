# Footprintsforms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

The vhost file needs to be able to redirect to `index.html` to allow deep linking:
```shell
<VirtualHost *:443>
    ServerName forms.cnm.edu
    ServerAlias forms

    LogLevel Error
    #log directory: /var/log/apache2
    ErrorLog ${APACHE_LOG_DIR}/forms-error.log
    CustomLog ${APACHE_LOG_DIR}/forms-access.log combined

    php_value include_path "/u01/data/php-lib"
    php_value include_path "/usr/share/php"

    SSLEngine on
    SSLCertificateFile /u01/ssl/star_cnm_edu.crt
    SSLCertificateKeyFile /u01/ssl/ssl.key
    SSLCertificateChainFile /u01/ssl/DigiCertCA.crt

    DocumentRoot /u01/data/docroots/forms/
    <Directory /u01/data/docroots/forms/>
        Options FollowSymLinks Includes ExecCGI
        AllowOverride none
        Require all granted
    </Directory>

    RewriteEngine On
# If an existing asset or directory is requested go to it as it is
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
    RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
    RewriteRule ^ - [L]
    # If the requested resource doesn't exist, use index.html
    RewriteRule ^ /footprints-forms2/index.html
    RewriteRule ^/fass/sapassessment.htm  https://www.cnm.edu/depts/financial-aid/forms/sap-assessment [NC,R=301,L]

</VirtualHost>
```
