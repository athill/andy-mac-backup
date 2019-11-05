# andy-mac-backup

How to refresh the `andy` account on work mac.

## Source

- [ ] Audit computer for files, apps, etc.
- [ ] Create/update config.yml
- [ ] Run `computer-refresh`: `node . backup config.yaml`
- [ ] Curate applications.txt

## Sink

- [ ] Add to sudoers and wheel and admin groups TODO: instructions
- [ ] Install nodejs (and nvm)
- [ ] Install Vagrant
- [ ] Install homebrew, tree (via homebrew)
- [ ] Set up Thunderbird
- [ ] Copy backup to home directory
- [ ] Run `computer-refresh`: `node . restore config.yaml`
- [ ] Install applications from applications.txt
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
