# Yibin Dong — Academic Homepage

Public website: https://molight.github.io/

The current blue-and-white homepage is maintained in `homepage/`:

- `index.html`: profile, research, publications, talks and contact
- `style.css`: responsive styling
- `app.js`: publication search/year filters and contact interactions
- `profile.jpg`: the portrait selected by the site owner
- `favicon.svg`: site icon

## Publication

The existing `.github/workflows/jekyll.yml` runs on pushes to `master`.
It builds the existing Jekyll content, preserves its original home page at
`/previous-homepage/`, and overlays the reviewed static homepage at `/`.
Existing publication, talk, news and downloadable-file routes are preserved.
After pushing a change, check the Actions build/deployment and the live website.

The old Jekyll collections and templates remain in this repository for the
existing archive routes. Editing `_pages/about.md` updates the previous home
page, rather than the current main page. Current home-page edits go in `homepage/`.

## Old-version backup and recovery

Before migration, the complete old `master` commit was:
`adef480ca924e675b3d50e071818079dbcedcd4d`.

It is preserved on branch `backup/pre-bluewhite-20261029-adef480`.
A complete Git bundle and a source ZIP were also saved by the owner locally.

To restore the old design while preserving history, revert the migration commit
named "Publish reviewed blue-and-white academic homepage; preserve old site" on
`master`, then verify its Pages deployment. Avoid force-pushing old history.

All displayed scholarly claims and publication details must be checked against
the owner's verified records. Do not publish unfinished Wiki project results
as established findings.
