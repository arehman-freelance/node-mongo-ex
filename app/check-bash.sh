if [ -e /bin/bash ]
then
    echo "ok"
else
    echo "nok"
    apk add --no-cache bash
fi