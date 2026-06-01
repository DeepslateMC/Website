# Configuration File

The `deepslate.yml` file is located in the `deepslate` folder, right where the `messages.yml` sits.
In it you can enable or disable the following features and control their behaviour.

Click on the options or categories to view additional information

<div style="background-color: var(--vp-c-bg-alt); padding: 24px; border-radius: 12px; margin-top: 24px; box-shadow: inset 0 2px 8px rgba(0,0,0,0.15);">

<ConfigProperty name="discordLink" value="https://discord.gg/BGrhNnVczp" type="string">
Sets the link used by the <code>/dc</code> and <code>/discord</code> command.
</ConfigProperty>

<ConfigProperty name="maintenance" value="false" type="boolean">
Toggles the server's maintenance mode. <br><br>
When set to <code>true</code>, only server operators (OPs) or players with a specific bypass permission will be able to join. All other players will be disconnected with a maintenance message.
</ConfigProperty>

<ConfigProperty name="opCommandActive" value="true" type="boolean">
Sets whether the <code>/op</code> command should get initialized or not. <br><br>
💡 <strong>Security Tip:</strong> Setting this to <code>false</code> completely removes the command, preventing rogue admins or certain malicious plugins from opping players in-game.
</ConfigProperty>

<ConfigProperty name="spawnOnJoin" value="false" type="boolean">
Sets if players should get teleported to the world spawn every time they join the server. <br><br>
<span style="color: #ff9800;">⚠️ <strong>Important:</strong></span> Remember to properly set a server spawn using vanilla commands when setting this to <code>true</code>.
</ConfigProperty>

<ConfigProperty name="preventKnowledgebookClick" value="false" type="boolean">
Decides if clicking the knowledgebook item should get cancelled, so it does not disappear.
</ConfigProperty>

<ConfigGroup name="messages">
<template #info>
Vanilla Minecraft often spams the server console with movement warnings when players lag, use Elytras, or fall fast. Here you can silence these specific logs to keep your console clean.
</template>

<ConfigProperty name="movedWrongly" value="true" type="boolean">
Decides whether the <em>"Player moved wrongly!"</em> warning should be printed to the console.
</ConfigProperty>

<ConfigProperty name="movedQuickly" value="true" type="boolean">
Decides whether the <em>"Player moved too quickly!"</em> warning should be printed to the console.
</ConfigProperty>
</ConfigGroup>

<ConfigProperty name="f3name" value="'&b&lDeepslateMC'" type="string">
Sets the brand name displayed in the top left corner of the F3 debug screen.
</ConfigProperty>

<ConfigGroup name="tablist">
<template #info>
Customize the in-game player list (accessed by holding the TAB key). You can set multi-line headers and footers to show welcome messages, rules, or your website.
</template>

<ConfigProperty name="enabled" value="false" type="boolean">
Turns the custom tablist decoration on or off.
</ConfigProperty>

<ConfigProperty name="header" :value="['&4This is the', '&4default header']" type="list">
The text displayed <strong>above</strong> the player list.
</ConfigProperty>

<ConfigProperty name="footer" :value="['&6This is the', '&6default footer']" type="list">
The text displayed <strong>below</strong> the player list.
</ConfigProperty>
</ConfigGroup>

<ConfigGroup name="playerlistHover">
<template #info>
Customizes the tooltip shown when a player hovers their mouse over the player count (e.g., "20/50") in their Multiplayer server list menu before joining.
</template>

<ConfigProperty name="enabled" value="false" type="boolean">
Turns the custom playerlist hover text on or off.
</ConfigProperty>

<ConfigProperty name="lines" :value="['&6This is the', '&6default text']" type="list">
The lines displayed inside the hover tooltip.
</ConfigProperty>
</ConfigGroup>

<ConfigGroup name="bossbar">
<template #info>
Displays a persistent Bossbar at the top of the screen for all players. Great for global server announcements, website links, or general information
</template>

<ConfigProperty name="enabled" value="false" type="boolean">
Turns the custom server bossbar on or off.
</ConfigProperty>

<ConfigProperty name="color" value="WHITE" type="string">
Controls the color of the bossbar. Valid options are: <code>PINK</code>, <code>BLUE</code>, <code>RED</code>, <code>GREEN</code>, <code>YELLOW</code>, <code>PURPLE</code>, <code>WHITE</code>.
</ConfigProperty>

<ConfigProperty name="progress" value="1.0" type="number">
Controls how far the bossbar is filled. This is a decimal value between <code>0.0</code> (empty) and <code>1.0</code> (full).
</ConfigProperty>

<ConfigProperty name="style" value="PROGRESS" type="string">
Controls the segmentation style of the bossbar. Valid options are: <code>PROGRESS</code> (smooth), <code>NOTCHED_6</code>, <code>NOTCHED_10</code>, <code>NOTCHED_12</code>, <code>NOTCHED_20</code> (segmented).
</ConfigProperty>

<ConfigProperty name="text" value="'&6Custom Bossbar'" type="string">
Sets the text displayed directly above the bossbar.
</ConfigProperty>
</ConfigGroup>

<ConfigGroup name="actionbar">
<template #info>
Displays a persistent, unintrusive text message just above the players' hotbar/inventory.
</template>

<ConfigProperty name="enabled" value="false" type="boolean">
Turns the persistent actionbar message on or off.
</ConfigProperty>

<ConfigProperty name="text" value="'&6Custom Actionbar'" type="string">
Sets the text displayed in the actionbar.
</ConfigProperty>
</ConfigGroup>

<ConfigProperty name="miniMessageMotdSupport" value="false" type="boolean">
Sets whether the MOTD (Message of the Day) from the <code>server.properties</code> file should be interpreted as a MiniMessage string. With MiniMessage, creating gradients and complex formatting is much easier. <br><br>
Make sure to use the <a href="https://webui.advntr.dev/" target="_blank" rel="noreferrer">Web UI Editor</a> to create your MOTD.<br>
</ConfigProperty>

<ConfigProperty name="sendSpectatorModePackets" value="true" type="boolean">
If this is <code>false</code>, packets containing the gamemode change to the spectator mode will not be sent to other players. Because of this, the spectator player will not appear semi-transparent in the tablist to others (though they will still look transparent to themselves). <br><br>
If this is set to <code>true</code>, standard vanilla behavior applies.
</ConfigProperty>

<ConfigGroup name="serverLinks">
<template #info>
Minecraft 1.21 introduced built-in "Server Links" in the game pause menu (ESC). You can define a list of helpful links for your community here.
</template>

<ConfigProperty name="<gold>Website" value="'https://pascalpex.de'" type="string">
You can add as many links as you want by adding new key-value pairs. <br>
The key (left side) is the display name shown to the player and supports MiniMessage formatting (like <code>&lt;gold&gt;</code>). The value (right side) is the actual URL.
</ConfigProperty>
</ConfigGroup>

<ConfigProperty name="enableTablist" value="true" type="boolean">
If set to <code>false</code>, this completely disables the player list, hiding all players from the tablist (including yourself). Useful for completely custom proxy setups.
</ConfigProperty>

</div>