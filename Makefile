.PHONY: build-production
build-production: ## Build the production docker image.
	docker build -t in-prod -f Dockerfile.production .

.PHONY: start-production
start-production: ## Start the production docker container.
	docker run --name in-prod -p 3001:3001 in-prod

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker stop in-prod && docker rm -f in-prod
