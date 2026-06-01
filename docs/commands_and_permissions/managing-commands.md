# Managing Commands
This explanation is based on [this page](https://bukkit.fandom.com/wiki/Commands.yml) and will show how to manage commands using the servers commands.yml file.

::: tip
Never include the leading slash (`/`) when defining commands or aliases in the `commands.yml` file.
:::

::: info
Make sure to restart your server after you made your changes in the `commands.yml` file.
:::

## Removing a command
If you want to remove a command added by DeepslateMC you can add the following into your `commands.yml` file:

```yml
aliases:
  COMMAND_NAME:
  - []
```

Example: If you want to remove the `/unbreakable` command you use:

```yml
aliases:
  unbreakable:
  - []
```

## Creating an alias
If you want to add another command to execute something you can add the following into your commands.yml file:

```yml
aliases:
  ALIAS:
  - "COMMAND"
```

Example: If you want to use the command `/lobby` to get to the spawn besides the `/spawn` command you use:

```yml
aliases:
  lobby:
  - "spawn"
```

## Redirecting a command
If you want to use a plugin for a command added by DeepslateMC you can add the following into your commands.yml file:

```yml
aliases:
  COMMAND:
  - "PLUGIN_NAME:COMMAND"
```

Example: If you have a custom clearchat plugin called `ChatPlugin` and dont want to use the `/clearchat` command from DeepslateMC you use:

```yml
aliases:
  clearchat:
  - "ChatPlugin:clearchat"
```
