# Server Commands

Below is a complete overview of all commands provided by `DeepslateMC`.

Click on any command or its aliases to copy them to your clipboard.

Please note that most commands require specific permissions. To see which permissions correspond to the commands listed below, please visit the dedicated [Permissions](/docs/commands_and_permissions/permissions) page.

::: tip Customize Your Commands
You can easily enable, disable, or rename any command to fit your server's needs. Check out the guide on [Managing Commands](/docs/commands_and_permissions/managing-commands) to learn how to tailor the command system to your liking.
:::

<CommandTable>

<CommandRow commands="/deepslate">
The main administrative command for DeepslateMC. It takes one of the following arguments:
<br>
<ul>
<li><code>reload</code>: Reloads the <code>deepslate.yml</code> and <code>messages.yml</code> configuration files on the fly without requiring a server restart.</li>
<li><code>version</code>: Displays the currently installed version and information about your DeepslateMC software.</li>
</ul>
</CommandRow>

<CommandRow commands="/discord" :aliases="['/dc']">
Sends a clickable link to your community Discord server in the chat. The URL can be configured in the <code>deepslate.yml</code>.
</CommandRow>

<CommandRow commands="/clearchat" :aliases="['/cc']">
Clears the global text chat for all players on the server. Useful for quickly removing spam or inappropriate messages.
</CommandRow>

<CommandRow commands="/setbuildworld" grouped>
Sets the world you are currently standing in as the build world.
</CommandRow>

<CommandRow commands="/buildworld">
Teleports the player to the spawn point of the designated build world.
</CommandRow>

<CommandRow commands="/maintenance">
Toggles the server's maintenance mode. When active, regular players without bypass permissions will be disconnected and cannot join.
</CommandRow>

<CommandRow commands="/help">
Displays the custom help message configured for your server.
</CommandRow>

<CommandRow commands="/setspawn" grouped>
Sets the global server spawn point at your current location.
</CommandRow>

<CommandRow commands="/spawn">
Teleports the player to the configured server spawn.
</CommandRow>

<CommandRow commands="/unbreakable">
Modifies the item currently held in your main hand to be unbreakable.
</CommandRow>

</CommandTable>