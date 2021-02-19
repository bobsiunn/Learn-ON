from __future__ import print_function
import time
import boto3
import json
from transcribe import transcribe_data

items = transcribe_data['results']["items"]

times = list(i["start_time"] for i in items if i["type"] != 'punctuation')
words = list(i['alternatives'][0]['content']
             for i in items if i["type"] != 'punctuation')

result = transcribe_data['results'][1][0]['transcript']

# results의 결과: ['a nice graph', 'T independent variable T', 'this video', 'the inflection points', 'places', 'inflection points', 'the function f', 'a graph']
comprehend = boto3.client('comprehend')

response = comprehend.detect_key_phrases(
    Text=result,
    LanguageCode='en'
)

results = list()
for i in range(10):
    results.append(response["KeyPhrases"][i]["Text"])


results = list(set(results))

# finals의 결과 [['a nice graph', [12, 19, 23, 59, 227, 295, 416], [24], [13, 20, 25, 79, 89]], ['T independent variable T', [32, 35], [33], [34], [32, 35]], ['this video', [0, 144, 148, 233, 329, 363, 389, 448, 566], [1]], ['the inflection points', [28, 43, 53, 78, 88, 100, 111, 137, 164, 187, 196, 199, 257, 274, 298, 326, 335, 345, 367, 383, 405, 420, 423, 427, 430, 436, 454, 461, 517, 522, 528, 531, 538, 549, 554, 559, 579, 582], [9, 44, 48, 165, 200, 445, 482, 492, 550, 575], [10, 45, 49, 515, 551, 576]], ['places', [51, 518, 555, 580]], ['inflection points', [9, 44, 48, 165, 200, 445, 482, 492, 550, 575], [10, 45, 49, 515, 551, 576]], ['the function f', [28, 43, 53, 78, 88, 100, 111, 137, 164, 187, 196, 199, 257, 274, 298, 326, 335, 345, 367, 383, 405, 420, 423, 427, 430, 436, 454, 461, 517, 522, 528, 531, 538, 549, 554, 559, 579, 582], [29, 145, 149], [30]], ['a graph', [12, 19, 23, 59, 227, 295, 416], [13, 20, 25, 79, 89]]]
finals = list()

for i in range(len(results)):
    finals.append([results[i]])
    result_list = results[i].split()
    for j in result_list:
        res_list = [k for k, value in enumerate(words) if value == j]
        finals[i].append(res_list)

# is_straigt의 결과: [['a nice graph', [1, 0], [1, 0], [1, 1, 1], [1, 0], [1, 0], [1, 0], [1, 0]], ['T independent variable T', [1, 1, 1, 1], [1, 0]], ['this video', [1, 1], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0]], ['the inflection points', [1, 0], [1, 1, 1], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 1, 0], [1, 0], [1, 0], [1, 1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 1, 1], [1, 0], [1, 0], [1, 0], [1, 0]], ['places', [1], [1], [1], [1]], ['inflection points', [1, 1], [1, 1], [1, 1], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 1], [1, 1]], ['the function f', [1, 1, 1], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0]], ['a graph', [1, 1], [1, 1], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0]]]

is_straight = list([i[0]] for i in finals)

for i in range(len(finals)):
    only_num = finals[i][1:]
    for j in range(len(only_num[0])):
        is_straight[i].append([1])
        for k in range(1, len(only_num)):
            if only_num[0][j]+k in only_num[k]:
                is_straight[i][j+1].append(1)
            else:
                is_straight[i][j+1].append(0)
                break


def multiple(num_list):
    result = 1
    for i in num_list:
        result *= i
    return result


is_straight_result = dict()
keys = list(i[0] for i in is_straight)
values = list()
for i in range(len(is_straight)):
    keyword = is_straight[i]
    values.append([])
    for j in range(len(keyword[1:])):
        if multiple(keyword[j+1]):
            values[i].append(times[finals[i][1][j]])

keyword_time = dict(zip(keys, values))
json_val = json.dumps(keyword_time)
print(json_val)
