import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/signing-in',
        'getting-started/navigating-the-app',
        'getting-started/welcome-tour',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/keywords',
        'core-concepts/flows',
        'core-concepts/agents',
        'core-concepts/executions',
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      items: [
        {
          type: 'category',
          label: 'Managing Projects',
          items: [
            'user-guides/managing-projects/creating-a-project',
            'user-guides/managing-projects/project-members',
            'user-guides/managing-projects/import-export',
          ],
        },
        {
          type: 'category',
          label: 'Working with Keywords',
          items: [
            'user-guides/working-with-keywords/creating-keywords',
            'user-guides/working-with-keywords/keyword-parameters',
            'user-guides/working-with-keywords/keyword-instances',
          ],
        },
        {
          type: 'category',
          label: 'Designing Flows',
          items: [
            'user-guides/designing-flows/file-tree-organization',
            'user-guides/designing-flows/building-a-flow',
            'user-guides/designing-flows/connecting-parameters',
          ],
        },
        {
          type: 'category',
          label: 'Running Executions',
          items: [
            'user-guides/running-executions/execution-plans',
            'user-guides/running-executions/running-tests',
            'user-guides/running-executions/viewing-results',
          ],
        },
        {
          type: 'category',
          label: 'Environment Variables',
          items: [
            'user-guides/environment-variables/managing-environments',
            'user-guides/environment-variables/using-variables',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'administration/user-management',
        'administration/roles-and-permissions',
        'administration/agent-setup',
        'administration/audit-logs',
        'administration/organization-management',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/keyboard-shortcuts',
      ],
    },
  ],
};

export default sidebars;
