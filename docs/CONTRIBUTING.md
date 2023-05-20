# Contributing

[fork]: https://github.com/youtogether-online/frontend/fork
[pr-new]: https://github.com/youtogether-online/frontend/compare
[issues]: https://github.com/youtogether-online/frontend/issues

## Workflow

[self-review-article]: https://blog.beanbaginc.com/2014/12/01/practicing-effective-self-review/

1. [Fork][fork] this repository
2. Create new branch following this pattern `prefix{feat, fix, chore, tests or similar}/{issue-number}-three-or-five-description-words`. For example: `feat/3-rework-design-system`
3. Make your changes

   - Make sure that commits follow the [Conventional Commits specification](https://www.conventionalcommits.org)
   - Make sure that all checks pass

   ```
   $ pnpm run test
   ```

4. [Open pull-request][pr-new] from your forked branch and specify related [issues][issues] (if any)

   - Before creating pull-reques do at least one self-review of your changes
   - Make sure that you describe the problem being solved as clearly as possible in your PR
   - Make sure that the verification via CI has passed for your PR
