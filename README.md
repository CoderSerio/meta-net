# Meta-Net

## Development

### Getting Started 🎉

Install the dependencies by running:
```shell
# ignore this command if you've already installed pnpm 
npm i pnpm -g

# for Chinese developers:
pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
pnpm install sharp

pnpm i
```

Create a development bundle for this Chrome extension and start a development server by running:
```shell
pnpm dev
```
The last step of starting developing is installing the development bundle in browser.

The development server will update the extension bundle while any file changes and reload it in browser automatically.



