docker build -t hook-exercise .
docker rm -f hook-exercise
docker run --name hook-exercise -it -v "$(pwd):/app" hook-exercise