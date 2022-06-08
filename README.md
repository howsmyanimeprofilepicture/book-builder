


1. First of all, clone this repo.

```bash
git clone https://github.com/howsmyanimeprofilepicture/book-builder
```


2. And then, install dependencies.
```bash
cd book-builder
npm i 
```

3. In the `/book-builder/posts/${Part}/${Chapter}/` directory, you can write a post. 
4. You should make the `Part` directory and the `Chapter` directory first.
5. And then save your file(`.md`) into the `/${Part}/${Chapter}` directory as below:
```bash
─ Part1 ─┬─ Chapter1 ─┬─ `1.1. Hello, world.md`
         │            └─ `1.2. LaTEX.md`
         └─ Chapter2 ─── `2.1. Emoji.md`
    
─ Part1 ─── Chapter3 ─── `3.1. YOLO.md`
```


6. Finally, type the command in your terminal as below:
```bash
node ./book-builder/build.js
```

7. Then, you can see your newly built book in the `/docs` directory! 😺
