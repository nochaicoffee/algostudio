cmake_minimum_required(VERSION 3.16)
project(AlgoStudio LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

file(GLOB_RECURSE SOURCES src/**/*.cpp)

foreach(SOURCE_FILE ${SOURCES})
    get_filename_component(EXEC_NAME ${SOURCE_FILE} NAME_WE)
    get_filename_component(TOPIC_DIR ${SOURCE_FILE} DIRECTORY)
    file(RELATIVE_PATH REL_DIR ${CMAKE_CURRENT_SOURCE_DIR}/src ${TOPIC_DIR})
    string(REPLACE "/" "_" TARGET_PREFIX "${REL_DIR}")

    if(TARGET_PREFIX)
        set(TARGET_NAME "${TARGET_PREFIX}_${EXEC_NAME}")
    else()
        set(TARGET_NAME "${EXEC_NAME}")
    endif()

    add_executable(${TARGET_NAME} ${SOURCE_FILE})
    target_include_directories(${TARGET_NAME} PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/include)
endforeach()
