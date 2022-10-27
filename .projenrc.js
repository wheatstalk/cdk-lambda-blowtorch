const pj = require('projen');
const project = new pj.awscdk.AwsCdkConstructLibrary({
  author: 'Josh Kellendonk',
  authorAddress: 'joshkellendonk@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@wheatstalk/cdk-lambda-blowtorch',
  repositoryUrl: 'https://github.com/wheatstalk/cdk-lambda-blowtorch.git',
  description: 'Warm your slow-starting AWS Lambdas with a blowtorch!',

  npmAccess: pj.javascript.NpmAccess.PUBLIC,
  releaseToNpm: true,

  depsUpgradeOptions: {
    workflowOptions: {
      schedule: pj.javascript.UpgradeDependenciesSchedule.MONTHLY,
    },
  },

  devDeps: [
    'aws-sdk',
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const cdkConfig = new pj.awscdk.CdkConfig(project, {
  app: '', // Required for types.
  watchIncludes: [
    `${project.srcdir}/**/*.ts`,
    `${project.testdir}/**/*.integ.ts`,
  ],
  buildCommand: 'yarn bundle',
});
cdkConfig.json.addDeletionOverride('app');
cdkConfig.json.addDeletionOverride('context');
cdkConfig.json.addDeletionOverride('output');

project.synth();