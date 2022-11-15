SRC_FILES := $(shell find src -type f)
BIN := ./node_modules/.bin

.EXPORT_ALL_VARIABLES:
REV := $(shell git rev-parse --short HEAD)
BRANCH := $(shell git branch --show-current)

build: $(SRC_FILES) node_modules package.json svelte.config.js tsconfig.json yarn.lock
	@echo "Starting build of $(BRANCH)-$(REV)"
	@${BIN}/vite build || (rm -rf build && exit 1)

.PHONY: dev
dev: node_modules
	@${BIN}/vite dev

.PHONY: preview
preview: build
	@${BIN}/vite preview

.PHONY: check
check: node_modules
	@${BIN}/svelte-check
	@${BIN}/prettier -c src

.PHONY: format
format: node_modules
	@${BIN}/prettier -w src

.PHONY: test
test: node_modules
	@${BIN}/playwright test

.PHONY: test-ci
test-ci: node_modules
	@${BIN}/playwright test --reporter github

node_modules:
	yarn install --non-interactive --frozen-lockfile

.PHONY: clean
clean:
	rm -rf build/ dist/ workers-site/

.PHONY: distclean
distclean: clean
	rm -rf node_modules/