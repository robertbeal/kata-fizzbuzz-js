.PHONY: build test

default: build test

build:
	docker build -t kata-fizzbuzz-js .

test:
	docker run --rm kata-fizzbuzz-js
