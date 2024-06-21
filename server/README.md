
https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/
Notes

First, despite adding Postgres, we can still create an independent Docker image for Django as long as the DATABASE environment variable is not set to postgres. To test, build a new image and then run a new container:

$ docker build -f ./app/Dockerfile -t hello_django:latest ./app
$ docker run -d \
    -p 8006:8000 \
    -e "SECRET_KEY=please_change_me" -e "DEBUG=1" -e "DJANGO_ALLOWED_HOSTS=*" \
    hello_django python /usr/src/app/manage.py runserver 0.0.0.0:8000

You should be able to view the welcome page at http://localhost:8006

#### history
 exec "$SHELL"
  384  pyenv
  385  pyenv versions
  386  cd api
  387  ls
  388  cd restapi/
  389  pyenv local domyshift
  390  pyenv local 3.12
  391  pyenv install 3.12
  392  pyenv install 3.10
  393  pyenv local 3.10
  394  pyenv version
  395  pyenv versions
  396  pyenv install 3.10
  397  sudo apt-get update; sudo apt-get install --no-install-recommends make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
  398  pyenv install 3.10
  399  pyenv local 3.10
  400  which python
  401  python -m pip install Django
  402  python -m django --version
  403  ls
  404  django-admin startproject domyshift
  405  pip install django-admin
  406  django-admin startproject domyshift
  407  ls
  408  cd domyshift/
  409  ls
  410  python manage.py runserver
  411  cd ..
  412  ls
  413  rm domyshift/ -rf
  414  ls
  415  python -m venv env
  416  ls
  417  source env/bin/activate
  418  pip install djangorestframework
  419  django-admin startproject domyshift
  420  cd domyshift/
  421  ls
  422  django-admin startapp api
  423  ls
  424  cd ..
  425  pwd
  426  find .
  427  cd ..
  428  ls
  429  cd restapi/
  430  ls
  431  cd domyshift/
  432  ls
  433  rm api/ -rf
  434  ;s
  435  ls
  436  cd ..
  437  ls
  438  rm domyshift/
  439  rm domyshift/ -rf
  440  ls
  441  django-admin domyshift
  442  django-admin startproject domyshift
  443  ls
  444  rm domyshift/ -rf
  445  django-admin startproject domyshift .
  446  ls
  447  cd domyshift/
  448  djano-admin startapp restapi
  449  django-admin startapp restapi
  450  ls
  451  cd ..
  452  ls
  453  python manage.py migrate
  454  python manage.py createsuperuser --username admin --email admin@example.com
