AWS_PROFILE:=default
AWS_DEFAULT_REGION:=ap-northeast-1
BRANCH_NAME:= $(subst _,-,$(subst /,-,$(shell git branch --show-current)))
CDK:=BRANCH_NAME=$(BRANCH_NAME) AWS_DEFAULT_REGION=$(AWS_DEFAULT_REGION) AWS_PROFILE=$(AWS_PROFILE) npx cdk
STACK_NAME:="cdk-template"

.PHONY: package
package:
	$(MAKE) -C ../ package

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
list: package
	$(CDK) list

.PHONY: synth
synth: package
	$(CDK) synth $(STACK_NAME)

.PHONY: deploy
deploy: package
	$(CDK) deploy $(STACK_NAME)

.PHONY: destroy
destroy: package
	$(CDK) destroy $(STACK_NAME)

.PHONY: diff
diff: package
	$(CDK) diff $(STACK_NAME)
