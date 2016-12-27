;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-lab" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M661.832428 119.41888c-15.13472-15.11424-35.20512-23.42912-56.56576-23.42912s-41.43104 8.31488-56.64768 23.4496l-45.11744 45.17888c-15.13472 15.09376-23.49056 35.20512-23.49056 56.60672 0 15.07328 4.13696 29.51168 11.8784 42.02496l-434.46272 174.03904c-29.06112 12.75904-49.88928 38.97344-55.74656 70.0416-5.91872 31.27296 3.9936 63.32416 26.68544 85.97504l407.04 402.55488c17.53088 17.53088 40.83712 27.48416 65.4336 28.0576 0.57344 0.04096 1.92512 0.04096 2.49856 0.04096 6.47168 0 13.02528-0.67584 19.51744-1.98656 31.80544-6.59456 57.856-28.5696 69.67296-58.49088l170.94656-428.032c12.86144 8.47872 27.99616 13.02528 43.74528 13.02528 21.44256 0 41.51296-8.35584 56.56576-23.4496l45.01504-45.056c15.2576-15.17568 23.61344-35.28704 23.61344-56.7296s-8.37632-41.59488-23.42912-56.58624l-247.17312-247.25504zM533.095148 939.74528c-3.97312 10.01472-12.6976 17.408-23.26528 19.57888-2.43712 0.512-4.89472 0.69632-7.33184 0.67584-8.13056-0.18432-15.9744-3.46112-21.83168-9.33888l-407.28576-402.82112c-7.49568-7.45472-10.79296-18.14528-8.8064-28.5696 1.9456-10.36288 8.92928-19.12832 18.61632-23.36768l198.94272-79.68768c134.0416 44.58496 268.12416 1.6384 402.24768 144.71168l-151.28576 378.81856zM863.744748 434.56512l-45.24032 45.21984c-6.2464 6.26688-16.384 6.26688-22.6304 0l-56.58624-56.54528-45.81376 114.85184 3.80928-9.68704c-96.31744-96.1536-194.21184-108.29824-282.5216-119.13216-28.38528-3.4816-55.9104-7.12704-82.944-12.96384l271.70816-108.83072-54.8864-54.8864c-6.2464-6.2464-6.2464-16.384 0-22.6304l45.24032-45.28128c6.2464-6.2464 16.384-6.2464 22.6304 0l247.1936 247.25504c6.32832 6.2464 6.32832 16.384 0.04096 22.6304zM527.995628 672.01024c44.09344 0 79.99488-35.88096 79.99488-79.99488s-35.88096-79.99488-79.99488-79.99488c-44.1344 0-79.99488 35.88096-79.99488 79.99488s35.90144 79.99488 79.99488 79.99488zM527.995628 544.01024c26.50112 0 48.00512 21.504 48.00512 48.00512s-21.504 48.00512-48.00512 48.00512c-26.5216 0-48.00512-21.504-48.00512-48.00512s21.46304-48.00512 48.00512-48.00512zM944.005868 0c-44.1344 0-79.99488 35.88096-79.99488 79.99488s35.88096 79.99488 79.99488 79.99488 79.99488-35.88096 79.99488-79.99488-35.88096-79.99488-79.99488-79.99488zM944.005868 128c-26.50112 0-48.00512-21.504-48.00512-48.00512s21.504-48.00512 48.00512-48.00512 48.00512 21.504 48.00512 48.00512-21.504 48.00512-48.00512 48.00512zM256.000748 544.01024c0 35.28704 28.71296 64 64 64s64-28.71296 64-64-28.71296-64-64-64-64 28.71296-64 64zM320.000748 512c17.67424 0 32.01024 14.29504 32.01024 32.01024s-14.336 32.01024-32.01024 32.01024-32.01024-14.29504-32.01024-32.01024 14.336-32.01024 32.01024-32.01024zM384.000748 736.01024c0-17.67424 14.336-32.01024 32.01024-32.01024s32.01024 14.336 32.01024 32.01024c0 17.67424-14.336 32.01024-32.01024 32.01024s-32.01024-14.336-32.01024-32.01024zM896.000748 256c0-17.67424 14.336-32.01024 32.01024-32.01024s32.01024 14.336 32.01024 32.01024c0 17.67424-14.336 32.01024-32.01024 32.01024s-32.01024-14.336-32.01024-32.01024z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-like" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M933.227846 335.094134c-39.99504-10.50561-134.033558-10.362258-271.589465-14.00748 6.49177-30.021879 8.0072-57.094814 8.0072-105.138012 0-114.803992-83.635302-215.928164-157.625102-215.928164-52.261824 0-95.32868 42.718717-96.00448 95.267244-0.696278 64.446693-20.642601 175.728336-127.99232 232.16783-7.863848 4.157191-30.390497 15.256685-33.687579 16.710677l1.699738 1.433514c-16.792592-14.49897-40.097434-25.598464-63.99616-25.598464l-96.00448 0c-52.917145 0-96.00448 43.066856-96.00448 96.00448l0 511.969282c0 52.917145 43.066856 96.00448 96.00448 96.00448l96.00448 0c38.070036 0 69.955483-22.99766 85.375997-55.251725 0.389097 0.122873 1.064896 0.32766 1.49495 0.389097 2.109313 0.573406 4.607724 1.187769 7.638582 1.986441 0.573406 0.16383 0.860108 0.225266 1.474472 0.389097 18.430894 4.566766 53.920605 13.065456 129.753495 30.49289 16.260144 3.706658 102.148111 22.014679 191.087415 22.014679l174.929664 0c53.306242 0 91.744895-20.519729 114.619683-61.702538 0.32766-0.634842 7.679539-15.010939 13.700298-34.424815 4.50533-14.621843 6.184589-35.32588 0.737236-56.316621 34.363378-23.612023 45.442393-59.327 52.630442-82.549927 12.061996-38.110993 8.437254-66.740316 0.061436-87.260044 19.33196-18.246585 35.796892-46.036278 42.739196-88.509249 4.321021-26.294742-0.32766-53.367678-12.451093-75.894326 18.103234-20.355899 26.376657-45.954363 27.318681-69.627822l0.389097-6.696558c0.225266-4.198148 0.409575-6.778473 0.409575-15.99392 0-40.404616-27.99448-91.970162-90.741436-109.889087zM224.027518 927.954563c0 17.693658-14.294182 32.00832-32.00832 32.00832l-96.00448 0c-17.693658 0-32.00832-14.294182-32.00832-32.00832l0-511.969282c0-17.693658 14.294182-32.00832 32.00832-32.00832l96.00448 0c17.693658 0 32.00832 14.294182 32.00832 32.00832l0 511.969282zM959.235886 465.093374c-0.634842 15.809611-7.269964 46.875907-63.258924 46.875907-48.00224 0-63.99616 0-63.99616 0-8.867308 0-15.99392 7.16757-15.99392 15.99392s7.126612 15.99392 15.99392 15.99392c0 0 14.00748 0 62.009719 0s54.309701 39.810731 51.196928 58.99934c-3.972882 23.878247-15.17477 68.99298-69.218247 68.99298-53.982041 0-75.99672 0-75.99672 0-8.867308 0-15.99392 7.126612-15.99392 15.99392 0 8.805872 7.126612 15.99392 15.99392 15.99392 0 0 38.008599 0 63.013179 0 54.00252 0 49.251445 41.182809 41.510469 65.757335-10.198428 32.295022-16.444453 62.234986-84.515889 62.234986-22.99766 0-52.179909 0-52.179909 0-8.867308 0-15.99392 7.126612-15.99392 15.99392 0 8.805872 7.126612 15.99392 15.99392 15.99392 0 0 22.178509 0 50.17299 0 34.99822 0 36.636522 33.114173 32.991301 44.99186-3.99336 12.983541-8.744435 22.629042-8.928744 23.079575-9.66598 17.447913-25.250325 27.933044-58.241626 27.933044l-174.929664 0c-87.874408 0-175.032058-19.925844-177.264244-20.437814-132.927704-30.615763-139.931444-32.991301-148.286783-35.366838 0 0-27.072936-4.566766-27.072936-28.199268l-0.225266-441.952363c0-15.010939 9.563586-28.567886 25.414155-33.33944 1.986441-0.757715 4.66916-1.597344 6.594164-2.396016 146.156991-60.535248 190.677839-193.278643 191.988481-302.246185 0.184309-15.318121 12.00056-32.00832 31.987841-32.00832 33.83093 0 93.628942 67.907606 93.628942 151.932004 0 75.873848-3.071816 88.980261-29.632782 168.048797 319.980801 0 317.748615 4.607724 345.968362 12.00056 34.99822 10.014119 38.008599 39.012059 38.008599 48.985221 0 10.976621-0.32766 9.379277-0.737236 20.130632zM144.016959 831.950083c-26.49953 0-48.00224 21.50271-48.00224 48.00224s21.50271 48.00224 48.00224 48.00224 48.00224-21.50271 48.00224-48.00224-21.50271-48.00224-48.00224-48.00224zM144.016959 895.946243c-8.805872 0-15.99392-7.208527-15.99392-15.99392s7.208527-15.99392 15.99392-15.99392 15.99392 7.208527 15.99392 15.99392-7.208527 15.99392-15.99392 15.99392z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.061439 567.858083c105.879482 0 191.99616-86.137157 191.99616-191.99616s-86.116678-191.99616-191.99616-191.99616c-105.879482 0-191.99616 86.116678-191.99616 191.99616s86.116678 191.99616 191.99616 191.99616zM512.061439 215.875362c88.246555 0 160.00704 71.740005 160.00704 160.00704s-71.740005 160.00704-160.00704 160.00704c-88.246555 0-160.00704-71.740005-160.00704-160.00704s71.740005-159.98656 160.00704-159.98656zM512 0c-211.779444 0-383.99232 170.103478-383.99232 384.033279 0 223.98528 192.037119 453.151897 332.01512 614.203396 0.51199 0.634867 22.9781 25.763325 50.748425 25.763325 0.061439 0 2.334673 0 2.457551 0 27.749845 0 50.236435-25.128457 50.748425-25.763325 140.059919-161.051499 332.056079-390.177156 332.056079-614.203396 0-213.909322-172.253835-384.033279-384.053759-384.033279zM515.747765 956.233035c-0.675826 0.634867-2.621388 2.047959-4.321194 3.133377-0.327673-0.860143-2.682826-2.744265-4.136877-4.259755-117.286614-134.940021-315.283294-362.673067-315.283294-571.093858 0-176.452151 143.582408-320.034559 319.9936-320.034559 176.51359 0 320.055039 143.582408 320.055039 320.055039 0 208.379832-198.01716 436.112878-316.307274 572.179276z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-banknote" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1005.310486 338.75968l-320-320c-15.872-15.872-38.87104-22.24128-60.68224-16.85504-11.48928 2.82624-21.77024 8.74496-29.88032 16.85504-7.2704 7.2704-12.73856 16.26112-15.872 26.29632-14.49984 47.0016-39.54688 87.87968-76.63616 124.928-49.54112 49.50016-114.05312 86.99904-182.31296 126.64832-72.43776 41.984-147.29216 85.504-208.65024 146.82112-52.1216 52.18304-87.61344 110.24384-108.42112 177.62304-7.00416 22.75328-0.90112 47.37024 15.872 64.18432l320 320c15.872 15.872 38.87104 22.24128 60.68224 16.85504 11.48928-2.88768 21.77024-8.74496 29.88032-16.85504 7.2704-7.2704 12.73856-16.26112 15.872-26.37824 14.52032-47.0016 39.58784-87.87968 76.6976-124.928 49.50016-49.50016 113.99168-86.9376 182.31296-126.5664 72.37632-42.04544 147.27168-85.56544 208.56832-146.88256 52.1216-52.1216 87.61344-110.24384 108.4416-177.62304 6.98368-22.71232 0.83968-47.43168-15.91296-64.16384zM384.029206 960c-105.984-105.984-214.016-214.05696-320-320 90.95168-294.44096 485.13024-281.55904 576-576 105.984 105.94304 214.05696 214.016 320.06144 320-90.97216 294.35904-485.15072 281.55904-576.06144 576zM626.020886 476.79488c-10.42432-8.74496-20.93056-14.68416-31.47776-17.63328-10.48576-2.94912-20.992-4.13696-31.62112-3.35872-10.48576 0.79872-21.25824 3.19488-32.01024 7.33184-10.752 4.1984-21.56544 8.74496-32.44032 14.00832-17.18272-19.74272-34.36544-39.26016-51.54816-57.38496 7.74144-7.00416 15.2576-10.56768 22.48704-10.81344 7.2704-0.32768 14.2336 0.45056 20.86912 2.10944 6.7584 1.69984 12.92288 3.13344 18.61632 4.25984 5.75488 1.1264 10.752-0.12288 15.13472-3.80928 4.64896-3.9936 7.20896-9.17504 7.55712-15.42144 0.32768-6.30784-2.048-12.45184-7.33184-18.432-6.7584-7.74144-14.88896-12.45184-24.63744-14.17216-9.6256-1.69984-19.49696-1.57696-29.75744 0.67584-10.11712 2.29376-19.74272 6.10304-28.85632 11.48928s-16.44544 10.87488-21.89312 16.26112c-2.08896-1.98656-4.15744-3.93216-6.2464-5.87776-2.29376-2.10944-5.18144-3.25632-8.64256-3.19488-3.4816 0-6.36928 1.49504-8.74496 4.25984-2.31424 2.68288-3.35872 5.81632-2.94912 9.1136 0.32768 3.42016 1.69984 6.0416 4.05504 8.06912 2.08896 1.76128 4.15744 3.4816 6.2464 5.30432-8.192 9.89184-14.9504 20.80768-20.25472 32.31744-5.36576 11.55072-8.58112 22.99904-9.76896 34.11968-1.24928 11.20256-0.06144 21.44256 3.35872 30.94528 3.42016 9.56416 9.76896 17.69472 19.00544 25.37472 15.07328 12.51328 32.80896 17.8176 53.37088 16.65024 20.52096-1.24928 42.61888-7.35232 66.39616-20.13184 18.88256 21.83168 37.82656 43.47904 56.7296 63.61088-8.00768 6.7584-15.01184 10.62912-21.17632 11.8784-6.18496 1.31072-11.6736 1.18784-16.67072-0.32768-4.99712-1.57696-9.6256-3.80928-13.88544-6.69696-4.25984-2.94912-8.43776-5.44768-12.63616-7.49568-4.13696-2.048-8.37632-3.19488-12.73856-3.25632s-8.99072 2.048-14.11072 6.43072c-5.24288 4.56704-7.86432 9.89184-7.86432 15.872 0 5.95968 2.74432 12.00128 8.13056 18.10432 5.44768 6.10304 12.51328 11.264 21.05344 15.31904s18.20672 6.61504 28.83584 7.33184c10.62912 0.73728 21.83168-0.86016 33.62816-5.24288 11.8784-4.32128 23.61344-12.12416 35.20512-23.73632 5.57056 5.44768 11.20256 10.62912 16.7936 15.60576 2.37568 2.048 5.24288 3.072 8.74496 2.80576 3.35872-0.12288 6.30784-1.69984 8.64256-4.5056 2.37568-2.88768 3.35872-6.0416 3.01056-9.37984-0.32768-3.35872-1.69984-5.95968-3.9936-7.80288-5.632-4.5056-11.264-9.25696-16.85504-14.2336 9.56416-11.73504 17.24416-24.12544 22.9376-36.39296 5.69344-12.32896 9.05216-24.18688 10.17856-35.20512 1.1264-11.07968-0.18432-21.05344-3.80928-30.1056-3.584-9.17504-9.95328-17.05984-19.06688-24.63744zM447.107606 498.50368c-9.05216 0.38912-16.95744-2.62144-23.87968-9.3184-2.94912-2.80576-4.99712-6.2464-6.2464-10.30144-1.31072-4.05504-1.76128-8.51968-1.24928-13.37344 0.45056-4.79232 1.88416-9.8304 4.38272-14.88896 2.37568-5.05856 5.89824-10.11712 10.36288-15.01184 16.22016 16.11776 32.41984 33.83296 48.64 52.1216-12.288 6.7584-22.97856 10.36288-32.03072 10.752zM598.045206 562.56512c-2.88768 5.30432-6.18496 10.05568-10.05568 14.17216-17.96096-18.10432-35.88096-38.01088-53.76-58.42944 4.56704-2.048 9.37984-4.1984 14.56128-6.36928s10.36288-3.62496 15.54432-4.5056c5.30432-0.79872 10.56768-0.57344 15.81056 0.67584 5.18144 1.31072 10.11712 4.13696 14.68416 8.58112 4.5056 4.5056 7.35232 9.17504 8.51968 14.2336 1.24928 5.12 1.31072 10.30144 0.45056 15.60576-0.9216 5.34528-2.82624 10.6496-5.75488 16.03584zM470.966806 709.75488c6.30784-5.07904 15.58528-4.83328 21.38112 1.06496 6.26688 6.2464 6.26688 16.44544 0 22.69184-0.512 0.512-1.06496 0.86016-1.6384 1.31072l0.06144 0.06144c-20.25472 15.40096-36.90496 29.24544-54.84544 47.2064-16.22016 16.19968-30.88384 33.23904-43.56096 50.56512l-20.43904 27.99616c-0.63488 1.14688-1.41312 2.21184-2.37568 3.19488-6.26688 6.2464-16.4864 6.2464-22.71232 0-5.44768-5.44768-6.10304-13.824-2.10944-20.0704l-0.06144-0.06144 21.89312-29.88032c13.66016-18.69824 29.36832-36.98688 46.75584-54.3744 18.08384-18.14528 37.60128-34.34496 57.61024-49.70496l0.06144 0zM588.132886 246.8864c16.19968-16.19968 30.8224-33.1776 43.52-50.5856l21.25824-29.12256c0.77824-1.37216 1.6384-2.74432 2.80576-3.93216 6.30784-6.30784 16.50688-6.30784 22.81472 0 5.98016 6.02112 6.2464 15.52384 0.79872 21.89312l0.06144 0.06144-21.89312 30.02368c-13.70112 18.67776-29.36832 36.92544-46.75584 54.31296-18.08384 18.08384-37.56032 34.34496-57.56928 49.70496l-0.12288-0.06144c-6.36928 5.85728-16.26112 5.7344-22.36416-0.45056-6.30784-6.30784-6.30784-16.56832 0-22.87616 1.1264-1.18784 2.43712-2.00704 3.74784-2.74432 18.82112-14.37696 36.9664-29.45024 53.69856-46.1824z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bubble" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 224.01024c8.82688 0 15.99488 7.168 15.99488 15.99488s-7.20896 15.99488-15.99488 15.99488c-170.45504 0-320 89.72288-320 192 0 8.82688-7.168 15.99488-15.99488 15.99488s-15.99488-7.168-15.99488-15.99488c0-121.40544 161.1776-224.01024 352.01024-224.01024zM512 64c-282.78784 0-512 171.9296-512 384 0 132.05504 88.92416 248.50432 224.256 317.62432 0 0.86016-0.24576 1.4336-0.24576 2.37568 0 57.38496-42.84416 119.13216-61.70624 151.552 0.04096 0 0.06144 0 0.06144 0-1.49504 3.52256-2.37568 7.39328-2.37568 11.44832 0 15.99488 12.96384 28.99968 28.99968 28.99968 3.01056 0 8.2944-0.79872 8.15104-0.45056 100.00384-16.384 194.21184-108.25728 216.10496-134.88128 31.96928 4.7104 64.9216 7.33184 98.75456 7.33184 282.7264 0 512-171.9296 512-384s-229.25312-384-512-384zM512 768c-29.34784 0-59.45344-2.23232-89.47712-6.61504-3.11296-0.512-6.20544-0.67584-9.27744-0.67584-19.00544 0-37.21216 8.45824-49.47968 23.36768-13.70112 16.67072-52.67456 53.88288-98.7136 81.24416 12.47232-28.63104 22.24128-60.74368 22.91712-93.81888 0.18432-2.048 0.28672-4.13696 0.28672-5.89824 0-24.064-13.47584-46.03904-34.87744-56.99584-118.59968-60.53888-189.37856-157.98272-189.37856-260.608 0-176.45568 200.97024-320 448-320 246.96832 0 448 143.54432 448 320s-200.99072 320-448 320z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bulb" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0c-194.433231 0-352.0032 157.569969-352.0032 352.0032 0 128.98046 118.02388 265.681726 160.99006 385.753565 64.101118 179.032579 56.9947 286.243235 191.01314 286.243235 136.00496 0 126.871063-106.678186 191.01314-285.50597 43.109538-120.317594 160.99006-258.49339 160.99006-386.49083 0-194.433231-157.631407-352.0032-352.0032-352.0032zM594.942341 869.604368l-158.655387 19.803764c-5.672847-16.383672-11.734805-35.552569-19.127937-60.578628-0.102398-0.327673-0.225275-0.675826-0.286714-0.98302l198.01716-24.739345c-2.805704 9.441091-5.816204 19.353213-8.437591 28.261835-4.198316 14.376672-7.946081 26.848743-11.48905 38.235395zM407.554089 797.045179c-5.816204-19.271295-12.390152-39.546089-19.680886-61.049659l248.49935 0c-3.932081 11.48905-7.864163 22.99858-11.263775 33.893722l-217.554689 27.176416zM512 959.9808c-32.419192 0-47.328333-3.747765-63.896322-39.99664l135.615848-16.99806c-19.639927 52.919262-33.955161 56.9947-71.719526 56.9947zM661.50101 671.9968l-298.653867 0c-15.933121-34.549069-35.081538-69.118618-53.943241-102.950901-41.757885-74.709546-84.887902-151.99952-84.887902-217.042699 0-158.819224 129.185256-288.00448 288.00448-288.00448s288.00448 129.185256 288.00448 288.00448c0 64.572149-43.191456 142.271715-84.9903 217.431811-18.697866 33.688926-37.702926 68.197036-53.49269 102.561789zM512 160.00704c8.806224 0 15.99456 7.167857 15.99456 15.99456s-7.167857 15.99456-15.99456 15.99456c-88.226075 0-160.00704 71.780964-160.00704 160.00704 0 8.826703-7.167857 15.99456-15.99456 15.99456s-15.99456-7.167857-15.99456-15.99456c0-105.879482 86.116678-191.99616 191.99616-191.99616z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-calendar" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M938.722986 96.00832l-138.687786 0 0-63.99872c0-17.694366-14.294754-32.0096-32.0096-32.0096s-32.0096 14.294754-32.0096 32.0096l0 63.99872-191.99616 0 0-63.99872c0-17.694366-14.335713-32.0096-32.0096-32.0096s-32.0096 14.294754-32.0096 32.0096l0 63.99872-191.99616 0 0-63.99872c0-17.694366-14.335713-32.0096-32.0096-32.0096s-32.0096 14.294754-32.0096 32.0096l0 63.99872-138.646827 0c-47.144017 0-85.338453 38.173957-85.338453 85.317974l0 757.335253c0 47.144017 38.214916 85.338453 85.338453 85.338453l853.323094 0c47.144017 0 85.317974-38.214916 85.317974-85.338453l0-757.335253c0-47.144017-38.173957-85.317974-85.317974-85.317974zM960.042239 938.641067c0 11.775764-9.563969 21.339733-21.319254 21.339733l-853.323094 0c-11.775764 0-21.339733-9.563969-21.339733-21.339733l0-757.335253c0-11.734805 9.563969-21.319254 21.339733-21.319254l138.646827 0 0 63.99872c0 17.694366 14.335713 32.0096 32.0096 32.0096s32.0096-14.294754 32.0096-32.0096l0-63.99872 191.99616 0 0 63.99872c0 17.694366 14.335713 32.0096 32.0096 32.0096s32.0096-14.294754 32.0096-32.0096l0-63.99872 191.99616 0 0 63.99872c0 17.694366 14.294754 32.0096 32.0096 32.0096s32.0096-14.294754 32.0096-32.0096l0-63.99872 138.687786 0c11.734805 0 21.319254 9.563969 21.319254 21.319254l0 757.335253zM224.067199 383.99232l127.99744 0 0 96.00832-127.99744 0zM224.067199 543.99936l127.99744 0 0 96.00832-127.99744 0zM224.067199 703.98592l127.99744 0 0 96.00832-127.99744 0zM448.052479 703.98592l127.99744 0 0 96.00832-127.99744 0zM448.052479 543.99936l127.99744 0 0 96.00832-127.99744 0zM448.052479 383.99232l127.99744 0 0 96.00832-127.99744 0zM672.058239 703.98592l127.99744 0 0 96.00832-127.99744 0zM672.058239 543.99936l127.99744 0 0 96.00832-127.99744 0zM672.058239 383.99232l127.99744 0 0 96.00832-127.99744 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-camera" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M512 320.04096c-141.4144 0-256 114.5856-256 256 0 141.37344 114.5856 256 256 256 141.37344 0 256-114.62656 256-256s-114.62656-256-256-256zM657.75616 700.98944c-68.99712 80.50688-190.17728 89.82528-270.68416 20.80768-80.54784-68.99712-89.82528-190.21824-20.80768-270.68416 68.95616-80.54784 190.17728-89.82528 270.68416-20.80768 80.4864 68.95616 89.78432 190.21824 20.80768 270.68416zM512 448.04096c8.82688 0 15.99488 7.168 15.99488 15.99488s-7.168 15.99488-15.99488 15.99488c-53.02272 0-95.96928 42.96704-96.01024 95.96928l0 0.06144c0 8.8064-7.168 15.99488-15.99488 15.99488s-15.99488-7.20896-15.99488-15.99488l0-0.06144c0.04096-70.656 57.30304-127.95904 128-127.95904zM943.73888 289.34144l-138.69056-23.1424-43.9296-109.89568c-14.68416-36.63872-49.70496-60.3136-89.12896-60.3136l-320 0c-39.424 0-74.42432 23.67488-89.14944 60.35456l-43.90912 109.85472-138.6496 23.1424c-46.53056 7.72096-80.2816 47.5136-80.2816 94.65856l0 480.01024c0 52.92032 43.06944 96.01024 96.01024 96.01024l832 0c52.92032 0 96.01024-43.06944 96.01024-96.01024l0-480.01024c0-47.14496-33.75104-86.9376-80.26112-94.65856zM960 864.01024c0 17.69472-14.29504 32.01024-32.01024 32.01024l-832 0c-17.69472 0-32.01024-14.29504-32.01024-32.01024l0-480.01024c0-15.64672 11.32544-28.99968 26.74688-31.55968l174.20288-29.02016 57.30304-143.29856c4.89472-12.12416 16.62976-20.13184 29.73696-20.13184l320 0c13.06624 0 24.80128 7.96672 29.696 20.13184l57.30304 143.29856 174.24384 29.02016c15.42144 2.56 26.74688 15.91296 26.74688 31.55968l0 480.01024z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-clip" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M939.6224 148.3776c112.51712 112.45568 112.51712 294.8096 0 407.26528l-350.94528 350.98624c-12.51328 12.53376-32.72704 12.53376-45.24032 0-12.57472-12.51328-12.57472-32.70656 0-45.24032l346.43968-346.46016c87.49056-87.49056 87.49056-229.25312-0.06144-316.76416-87.36768-87.49056-229.25312-87.49056-316.74368 0l-462.29504 456.86784c-62.50496 62.464-62.50496 163.77856 0 226.24256 62.50496 62.50496 163.7376 62.50496 226.24256 0l466.88256-461.35296c37.43744-37.43744 37.43744-98.34496 0-135.7824-37.43744-37.41696-98.304-37.41696-135.74144 0l-351.00672 351.00672c-12.51328 12.51328-32.72704 12.51328-45.24032 0-12.51328-12.55424-12.51328-32.72704 0-45.28128l350.98624-350.96576c62.42304-62.464 163.7376-62.464 226.24256 0 62.50496 62.50496 62.50496 163.77856 0 226.26304l-466.88256 461.37344c-87.30624 87.32672-229.41696 87.32672-316.74368 0s-87.32672-229.4784 0-316.80512l466.88256-461.35296c112.45568-112.51712 294.8096-112.51712 407.26528 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)