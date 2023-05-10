# File Splitter

This is a simple JavaScript application that allows you to split text files into chunks of a specific size. You can specify a prefix and a suffix that will be added to each chunk.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You don't need to install any specific software. This application runs directly in the browser.

### Installing

1. Clone the repository to your local machine using Git:

    ```
    git clone https://github.com/Lomet/JSTextSpliter.git
    ```

2. Navigate to the project directory:

    ```
    cd JSTextSpliter
    ```

3. Open `index.html` in your favorite web browser.

## Usage

1. Select a file by clicking on the "Choose File" button.
2. Specify the size of the chunks in the "Chunk Size" input field.
3. (Optional) Specify a prefix and a suffix that will be added to each chunk.
4. Click the "Get Next Chunk" button to get the next chunk. The chunk will be automatically copied to your clipboard.

To reload the application, press `F5`.

### Example
Suppose you have a text file with the following content:

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.

```

If you set the chunk size to 5, the first chunk will be `Lorem ipsum dolor sit amet`. If you set the prefix to `START: ` and the suffix to ` :END`, the chunk will be copied to your clipboard as `START: Lorem ipsum dolor sit amet :END`.

Now, with these manageable chunks, it becomes significantly easier to feed your text data into language models such as `GPT-3.5`/`GPT-4` by OpenAI. This tool helps ensure that each input segment is tailored to the model's maximum input length, thereby maximizing the effectiveness of your data utilization.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
