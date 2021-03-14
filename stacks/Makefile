AWS_PROFILE := default
AWS_DEFAULT_REGION := ap-northeast-1
TARGET := "*"
BRANCH_NAME := $(subst _,-,$(subst /,-,$(shell git branch --show-current)))

DOCKER_CDK = docker-compose run --rm \
	-e AWS_PROFILE=$(AWS_PROFILE) \
	-e AWS_DEFAULT_REGION=$(AWS_DEFAULT_REGION) \
	-e CDK_DEFAULT_REGION=$(AWS_DEFAULT_REGION) \
	-e BRANCH_NAME=$(BRANCH_NAME) \
	cdk npx aws-cdk

.PHONY: init
install:
	npm install

.PHONY: lint
lint:
	npm run lint

.PHONY: fmt
fmt:
	npm run fmt

.PHONY: list
list:
	$(DOCKER_CDK) list

.PHONY: synth
synth:
	$(DOCKER_CDK) synth $(TARGET)

.PHONY: deploy
deploy:
	$(DOCKER_CDK) deploy $(TARGET)

.PHONY: destroy
destroy:
	$(DOCKER_CDK) destroy $(TARGET)

.PHONY: diff
diff:
	$(DOCKER_CDK) diff $(TARGET)
