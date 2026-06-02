# Permissions

Welcome to the permission reference for DeepslateMC! Here you will find all the permission nodes required to use the commands and features of `DeepslateMC`. 

Click on any command, alias, or permission node to copy it to your clipboard.

## Command Permissions

The following permissions are required to execute the respective commands in-game.

::: tip
Visit the [Commands page](/docs/commands_and_permissions/commands) to learn more about what the commands do.
:::

<BaseTable :columns="['Command & Aliases', 'Permission']" grid="1.5fr 2fr">

<PermCommandRow commands="/deepslate" :aliases="['/deepslate reload', '/deepslate version']" permission="deepslate.command" />

<PermCommandRow commands="/clearchat" :aliases="['/cc']" permission="deepslate.clearchat" />

<PermCommandRow commands="/setbuildworld" permission="deepslate.setbuildworld" grouped />

<PermCommandRow commands="/buildworld" permission="deepslate.buildworld" />

<PermCommandRow commands="/maintenance" permission="deepslate.maintenance" />

<PermCommandRow commands="/spawn" permission="deepslate.spawn" grouped />

<PermCommandRow commands="/setspawn" permission="deepslate.setspawn" />

<PermCommandRow commands="/unbreakable" permission="deepslate.unbreakable" />

</BaseTable>

## Other Permissions

These permission nodes are tied to specific server mechanics and quality-of-life features rather than chat commands.

<BaseTable :columns="['Permission', 'Description']" grid="1.5fr 2fr">

<OtherPermRow permission="deepslate.maintenancebypass">
Allows a player to join the server while it is in maintenance mode.
</OtherPermRow>

</BaseTable>