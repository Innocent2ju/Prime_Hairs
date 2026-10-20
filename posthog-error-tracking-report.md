# PostHog error tracking

> ⚠️ **Needs your attention**
> - Add `POSTHOG_API_KEY` as a protected or masked secret in the hosting provider environment that runs the production build.
> - Add `POSTHOG_PROJECT_ID=301907` and `NEXT_PUBLIC_POSTHOG_HOST` in that same build environment, and ensure the app build also receives `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`.
> - The repository has no traceable CI or deployment path. Configure these values in the actual hosting provider and preserve checked-out Git metadata, or provide the provider's native release and commit metadata if you later add release linking.

## What you still need to do

1. The personal API key has already been written to `.env.local` through the project credentials setup. If the deployment provider does not use that file, create or select a personal API key with the **Source map upload** preset at <https://eu.posthog.com/settings/user-api-keys>.
2. In the actual CI or hosting provider settings for the environment that runs the production build, add `POSTHOG_API_KEY` as a protected/masked secret, and add these non-secret variables:
   - `POSTHOG_PROJECT_ID=301907`
   - `NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com`
   - `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` with the project's public token
   The repository does not identify a provider, so these belong in that provider's production build/environment-variable settings. The browser variables must be available when Next.js builds the client bundle.
3. Run the production build as `npm run build`. The build environment must retain the checked-out `.git` directory or expose equivalent provider release-name and commit/version metadata if release association is added later. No release-linking configuration was wired in this repository.

## What error tracking does now

Uncaught browser errors and unhandled promise rejections reach PostHog through `posthog-js` with `capture_exceptions: true` in `instrumentation-client.ts`. Root rendering errors caught by Next.js's global boundary reach PostHog through `posthog.captureException(error)` in `app/global-error.tsx`. The existing initialization uses `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`; no duplicate provider or global listeners were added.

The SDK was already installed and initialized for this project, so the app now has PostHog analytics and error capture through its existing browser initialization.

Source-map upload is wired for every production `npm run build` through:

- `next.config.ts`
- `package.json`
- `package-lock.json`

The Next.js configuration uses `POSTHOG_API_KEY`, `POSTHOG_PROJECT_ID`, and `NEXT_PUBLIC_POSTHOG_HOST`. Once those values are present where the build runs, every production build uploads source maps and removes them after upload. The normal production run command remains `npm run start`.

Release linking was not wired because no CI or deployment path could be traced in this repository. Your actual production deploy must later resolve a release from its Git/provider metadata and start the app with `POSTHOG_RELEASE_ID` if you want exceptions to name their release, version, and commit. Local runs, tests, and pull-request builds remain unchanged and send no release ID.

## Verify it

Trigger an error in the deployed app and inspect <https://eu.posthog.com/project/301907/error_tracking>. Uploaded symbol sets appear at <https://eu.posthog.com/project/301907/error_tracking/configuration>. After the next production build, confirm that the exception has a readable stack trace and that its symbol set appears in the configuration page.
