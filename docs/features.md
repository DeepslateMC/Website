# Features
Here you can find a short introduction to all the features **DeepslateMC** introduces.

## List of features
### Discord link commands
The commands `/dc` and `/discord` are added to let players know the link to your **Discord server**.

### ClearChat
The commands `/cc` and `/clearchat` are added to clear the chat of your Minecraft server.

### Buildworld
The commands `/setbuildworld` and `/buildworld` are added to make a world easily available for your builders.

### Maintenance mode
A maintenance mode, which can be toggled with `/maintenance`, will only allow authorized players to join your server.

### Option to disable the op command
You are able to completely deactivate the `/op` command for security reasons, as it is not required when using permissions plugins.

### Custom `/help` output
You can freely change the output of the `/help` command to provide guidance for your players.

### Spawn commands
The commands `/spawn` and `/setspawn` are added to set a spawn or lobby for your players.

### Option to disable knowledgebook clicks
You can disable the clicking of the `Knowledge Book` item to make it no longer disappear after clicking. This way you can better use it for other purposes.

### Toggleable move error messages
You can disable annoying messages like `Steve moved too quickly!` from the built-in movement checks of Minecraft.

### Configurable debug menu brand
You can customize the server brand shown to players in the debug menu (`F3`):
<img src="/img/debug_brand.png" alt="Debug Menu Brand">

### Simple Tablist decoration
You can decorate the tablist by adding your own `header` and `footer`.

### Custom playerlist hover text
You can add a text that will be shown to users hovering over the player count in the server list:
<img src="/img/playerlist_hover.png" alt="Playerlist Hover">

### Custom bossbar to display your text
You can add a custom, static bossbar that will be displayed to your players:
<img src="/img/bossbar.png" alt="Bossbar">

### Custom actionbar message
You can add a custom, static actionbar message that will be displayed to your players:
<img src="/img/actionbar.png" alt="Actionbar">

### MiniMessage support for MOTD
You have an option to define your `MOTD` in the `server.properties` file using the MiniMessage format. Here is an example:
```md
<rainbow>Hello, this is my MOTD</rainbow>
<gradient:blue:red><b>This is a bold gradient</b></gradient>
```
<img src="/img/mini_motd.png" alt="MiniMessage MOTD">

### Option to disable different style of spectators in tablist
In vanilla Minecraft, players in spectator mode are shown like this:
<img src="/img/spectator.png" alt="Spectator Mode Player">
With `DeepslateMC` you can disable this behaviour to make spectator mode players appear as normal.

### Option to add server links to the game pause menu
With version 1.21 Minecraft added a section `Server Links...` to the pause menu of the game. `DeepslateMC` makes it easy to add your own server links sent to your players.

### /unbreakable command to make an item unbreakable
The command `/unbreakable` is added to make the item in your hand unbreakable.

### Option to disable player tablist
There is an option to completely remove all players from the tablist, including yourself. This essentially disables the tablist. You can also combine this with a `header` or `footer`:
<img src="/img/empty_tablist.png" alt="Empty Tablist">

## Additional features
Since `DeepslateMC` is a fork of [Leaf](https://github.com/Winds-Studio/Leaf), you will benefit from all features introduced by upstream server software including `Paper`, `Purpur` and `Leaf`.
<br>
Additionally, you are able to customize all messages used in various parts of DeepslateMC using the [Messages File](/docs/files/messages).