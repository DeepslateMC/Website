# Managing Commands
_This explanation is based on [this page](https://bukkit.fandom.com/wiki/Commands.yml) and will show how to manage commands using the servers commands.yml file._

## Removing a command
If you want to remove a command added by DeepslateMC you can add the following into your commands.yml file:

`aliases:`

`COMMAND_NAME:`

`- []`

Example: If you want to remove the `/autosmelt` command you use:

`aliases:`

`autosmelt:`

`- []`

## Creating an alias
If you want to add another command to execute something you can add the following into your commands.yml file:

`aliases:`

`ALIAS:`

`- "COMMAND"`

Example: If you want to use the command `/hub` to get to the lobby/spawn besides the `/spawn` and `/lobby` commands you use:

`aliases:`

`hub:`

`- "spawn"`

## Redirecting a command
If you want to use a plugin for a command added by DeepslateMC you can add the following into your commands.yml file:

`aliases:`

`COMMAND:`

`- "PLUGIN_NAME:COMMAND"`

Example: If you have a custom clearchat plugin called ChatPlugin and dont want to use the clearchat command from DeepslateMC you use:

`aliases:`

`clearchat:`

`- "ChatPlugin:clearchat"`