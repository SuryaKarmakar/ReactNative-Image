# React Native Image Component

## Image Source :
<p>The image source either a remote <b>URL</b> or a <b>local</b> file resource</p>
<ul>
<li><P>If we set image source from <b>local file</b>, then we need to specify the full local image <b>path</b> into <b>require()</b> function</P>

```js
source={require('./src/images/logo.png')}
```
</li>
<li><p>If we set image source from <b>remote URL</b>, then we need to specify the full URL link as a <b>uri</b>format</p>

```js
source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
```
</li>
</ul>

# Props 

## blurRadius :
<p>blurRadius: the blur radius of the blur filter added to the image. basically it blur the image view</p>

```js
blurRadius={2}
```
## defaultSource :
<p>A static image to display while loading the image source.</p>

```js
defaultSource={require('./src/images/logo.png')}
```
## onLoad :
<p>Invoked when load completes successfully</p>

```js
onLoad={() => alert('yes')} 
```
## resizeMode :
<ul>
<li><b>cover:</b> Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).</li>
<li><b>contain:</b> Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).</li>
<li><b>stretch:</b> Scale width and height independently, This may change the aspect ratio of the src.</li>
<li><b>repeat:</b> Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.</li>
<li><b>center:</b> Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.</li>
</ul>

```js
resizeMode='center'
```
## style :
<p>this props style the image view. like width and height size, borderradious etc</p>

```js
style={{width:100, height:100}}
```
## Usage
```
 $ git clone https://github.com/SuryaKarmakar/React-Native-Image.git
 $ cd React-Native-Image
 $ npm install 
 $ npm run [web, android, ios]
```
## Run with Expo 
```
 $ expo start --[web, android, ios]
```

