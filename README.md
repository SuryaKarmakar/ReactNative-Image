# React Native Image Component

## Usage :

The image source either a remote <b>URL</b> or a <b>local</b> file resource.

- If we set image source from <b>local file</b>, then we need to specify the full local image <b>path</b> into <b>require()</b> function.

```js
<Image source={require("./src/images/logo.png")} />
```

- If we set image source from <b>remote URL</b>, then we need to specify the full URL link as a <b>uri</b> format.

```js
<Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
```

# Props

## blurRadius :

blurRadius: the blur radius of the blur filter added to the image. basically it blur the image view.

```js
<Image
  blurRadius={2}
  source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
/>
```

## defaultSource :

A static image to display while loading the image source.

```js
<Image
  defaultSource={require("./src/images/logo.png")}
  source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
/>
```

## onLoad :

Invoked when load completes successfully.

```js
<Image
  source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
  onLoad={() => alert("img loaded")}
/>
```

## resizeMode :

- <b>cover:</b> Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).

- <b>contain:</b> Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).

- <b>stretch:</b> Scale width and height independently, This may change the aspect ratio of the src.

- <b>repeat:</b> Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.

- <b>center:</b> Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.

- enum('cover', 'contain', 'stretch', 'repeat', 'center') ... 'cover' is default.

```js
<Image
  resizeMode="center"
  source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
/>
```

## style :

This props style the image view. like width and height size, borderradious etc.

```js
<Image
  style={{ width: 100, height: 100 }}
  source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
/>
```
