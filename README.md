# andy-mac-backup

How to refresh the `andy` account on mac.

## Source

- [ ] Audit computer for files, apps, etc.
- [ ] Create/update config.yml
- [ ] Run `computer-refresh`: `node . backup config.yaml`
- [ ] Curate applications.txt
- [ ] Export [Thunderbird address book](https://www.lifewire.com/export-contacts-thunderbird-1173092)


## Sink
- [ ] Connect to [Dropbox](https://www.dropbox.com/downloading)
- [ ] Install [KeePassX](https://www.keepassx.org/downloads)
- [ ] Log into Chrome, Firefox, etc.
- [ ] Set up [Google Drive](https://www.google.com/drive/download/)
- [ ] Install [vscode](https://code.visualstudio.com/download) and [set up command line](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
- [ ] Install [nodejs](https://nodejs.org/en/download/)
- [ ] Install [homebrew](https://gist.github.com/jaymcgavren/bb85914950578edabad190c3bf670d90)
     - tree
- [ ] Copy backup to home directory
- [ ] Run `computer-refresh`: `node . restore config.yaml`	 
- [ ] Install and set up [Thunderbird](https://www.thunderbird.net/) creds in keepass. `Tools -> Import ...` the address book
- [ ] PHP development [Homestead](https://laravel.com/docs/homestead) 
     - Install Vagrant
	 - Install VirtualBox
- [ ] Install any other relevant applications from applications.txt
- [ ] Run `scripts/01-script.sh` and `scripts/01-admin.sh` 
- [ ] Fix sublime tab order:

	```
	Put in (Preferences -> Key Bindings - User):

	{ "keys": ["ctrl+tab"], "command": "next_view" },
	{ "keys": ["ctrl+shift+tab"], "command": "prev_view" }
	```
- [ ] Sublime and size-up licenses

...


## Notes

* "Who did I forget?" (2Pac)
* Not sure of sink sequence
