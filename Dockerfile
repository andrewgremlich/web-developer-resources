FROM pierrezemb/gostatic
COPY ./index.html /srv/http/
COPY ./style.css /srv/http/
COPY ./dropdown.css /srv/http/
COPY ./hash-listener.js /srv/http/