module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
  },
}
