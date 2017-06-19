#BITMAP-TRANSFORMERS
\n
# In this assignment we built a Bitmap reader and transformer. It reads a Bitmap, runs three different color transforms on the bitmap and then writes a new file. We used node buffers to manipulate binary data. We wrote tests for each transform as well as the constructor and the read/write functions.
\n
# First we opened a file using fs and read it into a buffer.
\n
# Then we converted buffer headers data into a JavaScript object.
\n
# We then ran three separate transforms on the buffer directly.
\n  
# Next, we wrote the buffer to a new file.
\n
# Finally we wrote and ran all of our tests. 


# **USAGE** 
---
```
  //In the directory where index.js, invoke index js with the following parameters provide_color_(red, blue or green. default is red)
  $ node index.js <path_to_bmp_file> <transform_type> <color>
  
  //The result is generated in ./assets/output.bmp

  //Sample
  $ node index.js ./assets/bitmap.bmp scale blue


```