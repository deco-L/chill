SHELL = bash

all: stop build run

build:
	export DOCKER_BUILDKIT=1 && \
	docker build \
	-f Dockerfile \
	--build-arg HTTP_PROXY=${HTTP_PROXY} \
	--build-arg HTTPS_PROXY=${HTTPS_PROXY} \
	-t calculator .

run:
	docker run -d -p 3000:3000 -v calculator_node_modules:/app/node_modules -v ${PWD}/app:/app \
		--name calculator_container calculator

stop:
	docker stop calculator_container || true && \
	docker rm calculator_container || true && \
	rm -rf ./app/node_modules

clean: stop
	docker rmi calculator || true && \
	docker volume rm calculator_node_modules && \
	rm -rf ./app/node_modules

.PHONY: all build run stop clean
